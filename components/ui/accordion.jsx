// components/ui/accordion.jsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Your accordion component code
const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex items-center justify-between p-4 text-lg font-semibold text-primary",
            className
        )}
        {...props}
    />
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn("p-4 text-sm text-muted-foreground", className)}
        {...props}
    />
))

AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
