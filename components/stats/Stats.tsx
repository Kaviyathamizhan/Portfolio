import React from 'react'
import { statsData } from '@/lib/data'
import { Container } from '@/components/layout'
import { FadeUp, StaggerContainer, StaggerItem, CountUp } from '@/components/shared'

export function Stats() {
  return (
    <section className="relative py-5 border-y border-[#27272a]">
      <Container size="lg">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <StaggerItem key={stat.id}>
              <FadeUp>
                <div className="text-center py-2">
                  <p className="text-2xl md:text-3xl font-medium font-display text-text-primary mb-1 tracking-tight">
                    <CountUp
                      to={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.value % 1 !== 0 ? (stat.value.toString().split('.')[1]?.length || 1) : 0}
                    />
                  </p>
                  <p className="text-xs text-text-muted">{stat.label}</p>
                </div>
              </FadeUp>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
