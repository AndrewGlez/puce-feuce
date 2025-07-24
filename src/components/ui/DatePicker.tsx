import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date) => void;
  label: string;
  required?: boolean;
  minDate?: Date;
  placeholder?: string;
  includeTime?: boolean;
  className?: string;
}

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export default function DatePicker({
  value,
  onChange,
  label,
  required = false,
  minDate,
  placeholder = "Seleccionar fecha",
  includeTime = true,
  className = "",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState({ hours: 9, minutes: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setCurrentDate(new Date(value.getFullYear(), value.getMonth(), 1));
      setSelectedTime({
        hours: value.getHours(),
        minutes: value.getMinutes(),
      });
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDisplayDate = (date: Date | undefined) => {
    if (!date) return placeholder;

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    if (includeTime) {
      options.hour = "2-digit";
      options.minute = "2-digit";
      options.hour12 = false;
    }

    return date.toLocaleDateString("es-ES", options);
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const selectDate = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
      selectedTime.hours,
      selectedTime.minutes
    );
    onChange(newDate);
    if (!includeTime) {
      setIsOpen(false);
    }
  };

  const updateTime = () => {
    if (value) {
      const newDate = new Date(value);
      newDate.setHours(selectedTime.hours, selectedTime.minutes);
      onChange(newDate);
    }
    setIsOpen(false);
  };

  const isDateDisabled = (day: number) => {
    if (!minDate) return false;
    const dateToCheck = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return dateToCheck < minDate;
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        value &&
        value.getDate() === day &&
        value.getMonth() === currentDate.getMonth() &&
        value.getFullYear() === currentDate.getFullYear();

      const isDisabled = isDateDisabled(day);
      const isToday =
        new Date().toDateString() ===
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        ).toDateString();

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => !isDisabled && selectDate(day)}
          disabled={isDisabled}
          className={`
            w-10 h-10 rounded-lg font-medium transition-all duration-200 text-sm
            ${
              isSelected
                ? "bg-feuce-primary text-white shadow-md"
                : isToday
                ? "bg-blue-100 text-feuce-primary border border-feuce-primary"
                : "hover:bg-gray-100 text-gray-700"
            }
            ${isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <label className="block text-sm font-normal text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white flex items-center justify-between hover:border-gray-400 transition-colors"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {formatDisplayDate(value)}
        </span>
        <IconCalendar className="w-5 h-5 text-gray-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 min-w-[320px]"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={() => navigateMonth("prev")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <IconChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <h3 className="text-lg font-semibold text-gray-800">
                {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>

              <button
                type="button"
                onClick={() => navigateMonth("next")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <IconChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {renderCalendarDays()}
            </div>

            {/* Time Picker */}
            {includeTime && (
              <div className="pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">
                    Hora
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="0"
                      max="23"
                      value={selectedTime.hours.toString().padStart(2, "0")}
                      onChange={(e) =>
                        setSelectedTime((prev) => ({
                          ...prev,
                          hours: Math.max(
                            0,
                            Math.min(23, parseInt(e.target.value) || 0)
                          ),
                        }))
                      }
                      className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-500">:</span>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      value={selectedTime.minutes.toString().padStart(2, "0")}
                      onChange={(e) =>
                        setSelectedTime((prev) => ({
                          ...prev,
                          minutes: Math.max(
                            0,
                            Math.min(59, parseInt(e.target.value) || 0)
                          ),
                        }))
                      }
                      className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={updateTime}
                    disabled={!value}
                    className="px-4 py-2 bg-feuce-primary text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => {
                  const today = new Date();
                  onChange(
                    new Date(
                      today.getFullYear(),
                      today.getMonth(),
                      today.getDate(),
                      selectedTime.hours,
                      selectedTime.minutes
                    )
                  );
                  setIsOpen(false);
                }}
                className="px-3 py-2 text-sm text-feuce-primary hover:bg-blue-50 rounded-lg transition-colors"
              >
                Hoy
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
