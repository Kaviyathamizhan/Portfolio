import React from 'react'
import { contactData, personalData } from '@/lib/data'
import { Container, Section } from '@/components/layout'
import { SectionHeading, Button, FadeUp, SocialLinks } from '@/components/shared'
import { Mail, ArrowUpRight, Clock, MapPin, CircleDot } from 'lucide-react'

export function Contact() {
  return (
    <Section id="contact">
      <Container size="md">
        <FadeUp className="text-center mb-12">
          <SectionHeading
            subtitle="Contact"
            title="Get In Touch"
            description="Open to ML engineering roles, research collaborations, and internship opportunities."
            align="center"
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-8 md:p-10 mb-6">
            <div className="text-center flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-medium font-display text-text-primary mb-2">
                {personalData.name}
              </h3>
              <p className="text-sm text-text-muted mb-8 max-w-sm">
                {personalData.title} based in {personalData.location}.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 w-full max-w-sm">
                <Button
                  href={`mailto:${contactData.email}`}
                  variant="primary"
                  size="md"
                  className="gap-2 font-medium justify-center"
                >
                  <Mail className="w-4 h-4" />
                  {contactData.email}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </div>

              <SocialLinks variant="contact" />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {[
              { label: 'Response Time', value: 'Within 24h', icon: Clock },
              { label: 'Location', value: personalData.location ?? 'Chennai, India', icon: MapPin },
              { label: 'Status', value: 'Open to Hire', icon: CircleDot },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-[#27272a] bg-[#18181b] px-5 py-4"
              >
                <Icon className="w-4 h-4 text-text-disabled mx-auto mb-2" />
                <p className="text-sm font-medium text-text-primary">{value}</p>
                <p className="text-xs text-text-muted mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
