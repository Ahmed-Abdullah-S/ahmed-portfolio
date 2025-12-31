import { useMutation } from "@tanstack/react-query";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = insertMessageSchema.parse(data);
      
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
        className: "bg-green-500/10 border-green-500 text-green-500",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

