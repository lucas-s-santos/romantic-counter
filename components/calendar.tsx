"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

const specialDayColor = "bg-primary text-primary-foreground"

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl md:text-4xl font-serif text-center text-foreground">Nosso Dia Especial</h2>
      <p className="text-center text-muted-foreground">Todo dia 12 é especial para nós</p>

      <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
        <div className="flex items-center justify-between mb-6">
          <Button onClick={handlePrevMonth} variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h3 className="text-xl font-semibold text-foreground">
            {months[currentMonth]} {currentYear}
          </h3>
          <Button onClick={handleNextMonth} variant="ghost" size="icon" className="rounded-full">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}

          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {days.map((day) => (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 ${
                day === 12
                  ? `${specialDayColor} shadow-md scale-110 font-bold`
                  : "bg-secondary/20 text-foreground hover:bg-secondary/40"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
