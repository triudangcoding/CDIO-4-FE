"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Users } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Đào Hữu Quang",
    role: "Frontend Developer",
    position: "Lead Developer",
    avatar: "/app/assets/img/DaoHuuQuang.jpg",
    description: "Chuyên gia React và Next.js với 3+ năm kinh nghiệm",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    social: {
      github: "https://github.com/quang",
      linkedin: "https://linkedin.com/in/quang",
      email: "quang@example.com"
    }
  },
  {
    name: "Võ Quốc Triệu",
    role: "Backend Developer", 
    position: "Senior Developer",
    avatar: "/app/assets/img/VoQuocTrieu.jpg",
    description: "Chuyên gia Node.js và Database với kiến thức sâu về hệ thống",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Docker"],
    social: {
      github: "https://github.com/trieu",
      linkedin: "https://linkedin.com/in/trieu",
      email: "trieu@example.com"
    }
  },
  {
    name: "Lai Hữu Triệu",
    role: "UI/UX Designer",
    position: "Design Lead",
    avatar: "/app/assets/img/LaiHuuTrieu.jpg",
    description: "Thiết kế trải nghiệm người dùng với tư duy sáng tạo",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    social: {
      github: "https://github.com/trieu2",
      linkedin: "https://linkedin.com/in/trieu2",
      email: "trieu2@example.com"
    }
  },
  {
    name: "Nguyễn Văn A",
    role: "Full Stack Developer",
    position: "Developer",
    avatar: "/app/assets/img/DaoHuuQuang.jpg", // Sử dụng lại ảnh có sẵn
    description: "Phát triển toàn diện từ frontend đến backend",
    skills: ["React", "Node.js", "Python", "AWS"],
    social: {
      github: "https://github.com/nguyenvana",
      linkedin: "https://linkedin.com/in/nguyenvana",
      email: "nguyenvana@example.com"
    }
  },
  {
    name: "Trần Thị B",
    role: "DevOps Engineer",
    position: "Infrastructure Lead",
    avatar: "/app/assets/img/VoQuocTrieu.jpg", // Sử dụng lại ảnh có sẵn
    description: "Quản lý hệ thống và triển khai ứng dụng",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    social: {
      github: "https://github.com/tranthib",
      linkedin: "https://linkedin.com/in/tranthib",
      email: "tranthib@example.com"
    }
  }
]

export function PricingSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,66,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8C42]/20 to-[#FF8C42]/10 border border-[#FF8C42]/30 backdrop-blur-sm mb-6"
          >
            <Users className="w-4 h-4 text-[#FF8C42]" />
            <span className="text-sm font-medium text-white/90">Đội ngũ</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#FF8C42] to-white bg-clip-text text-transparent mb-4">
            Đội ngũ phát triển
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Gặp gỡ những thành viên tài năng đằng sau sản phẩm của chúng tôi
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:border-[#FF8C42]/50 hover:shadow-lg hover:shadow-[#FF8C42]/10 hover:-translate-y-1">
                
                {/* Avatar với outline */}
                <div className="relative mb-4 flex-shrink-0">
                  <div className="w-16 h-16 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#E8E9F3] rounded-full p-0.5"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white/10">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Thông tin thành viên */}
                <div className="text-center mb-4 flex-grow">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#FF8C42] font-semibold text-xs">{member.role}</span>
                    <span className="text-white/60 text-xs bg-white/10 px-2 py-0.5 rounded-full inline-block w-fit mx-auto">
                      {member.position}
                    </span>
                  </div>
                  <p className="text-white/70 text-xs mt-2 leading-relaxed line-clamp-3">{member.description}</p>
                </div>

                {/* Skills */}
                <div className="mb-4 flex-shrink-0">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-0.5 bg-gradient-to-r from-[#FF8C42]/20 to-[#FF8C42]/10 text-[#FF8C42] text-xs font-medium rounded-full border border-[#FF8C42]/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2 flex-shrink-0">
                  <a
                    href={member.social.github}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-[#FF8C42]/20 border border-white/20 hover:border-[#FF8C42]/50 transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-3 h-3" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-[#FF8C42]/20 border border-white/20 hover:border-[#FF8C42]/50 transition-all duration-200 hover:scale-105"
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-[#FF8C42]/20 border border-white/20 hover:border-[#FF8C42]/50 transition-all duration-200 hover:scale-105"
                  >
                    <Mail className="w-3 h-3" />
                  </a>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6 text-lg">Muốn tham gia đội ngũ của chúng tôi?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF8C42] to-[#FF8C42]/80 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-[#FF8C42]/25 hover:shadow-[#FF8C42]/40 transition-all duration-300"
          >
            Liên hệ chúng tôi →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
