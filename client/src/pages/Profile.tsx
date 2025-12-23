import { personalInfo, skills, experience } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, Mail } from "lucide-react";

export default function Profile() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Sidebar Info */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-1 space-y-6"
      >
        <div className="glass-card p-6 rounded-3xl text-center space-y-6 sticky top-24">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-50 blur-xl animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80" 
              alt={personalInfo.name} 
              className="relative w-full h-full object-cover rounded-full border-2 border-white/10"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display">{personalInfo.name}</h2>
            <p className="text-primary font-medium">{personalInfo.role}</p>
          </div>

          <div className="space-y-3 text-sm text-left bg-white/5 p-4 rounded-2xl">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-white" /> {personalInfo.location}
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4 text-white" /> {personalInfo.email}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:col-span-2 space-y-12">
        {/* Bio */}
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold font-display mb-6"
          >
            {t("profile.title")}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-3xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
              <br /><br />
              I specialize in the JavaScript ecosystem, with a deep love for React and modern CSS. 
              My journey started with a curiosity about how things work on the internet, which led me to dive deep into full-stack development.
              I believe in writing clean, maintainable code and building interfaces that are inclusive for everyone.
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-bold font-display mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <skill.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h3 className="text-2xl font-bold font-display mb-6">Experience</h3>
          <div className="relative space-y-8 pl-8 border-l border-white/10 ml-4">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 className="w-4 h-4" /> {exp.company}
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono border border-white/5">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
