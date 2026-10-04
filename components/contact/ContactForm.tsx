"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiArrowRight } from "react-icons/fi";
import { contactApi } from "../../config/api";
import { useToast } from "../../contexts/ToastContext";

const initialForm = {
    name: "",
    email: "",
    service: "",
    message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormFieldName = keyof typeof initialForm;
type FormErrors = Partial<Record<FormFieldName, string>>;

const validateField = (field: FormFieldName, value: string) => {
    const trimmed = value.trim();

    switch (field) {
        case "name": {
            if (!trimmed) return "Name is required.";
            if (trimmed.length < 2) return "Name must be at least 2 characters.";
            if (trimmed.length > 100) return "Name must be under 100 characters.";
            return "";
        }
        case "email": {
            if (!trimmed) return "Email is required.";
            if (!emailPattern.test(trimmed)) return "Please enter a valid email address.";
            return "";
        }
        case "service": {
            if (!trimmed) return "";
            if (trimmed.length < 2) return "Please select a valid service.";
            if (trimmed.length > 120) return "Service selection is too long.";
            return "";
        }
        case "message": {
            if (!trimmed) return "Project description is required.";
            if (trimmed.length < 10) return "Project description must be at least 10 characters.";
            if (trimmed.length > 5000) return "Project description must be under 5000 characters.";
            return "";
        }
        default:
            return "";
    }
};

const validateForm = (data: typeof initialForm): FormErrors => {
    const nextErrors: FormErrors = {};

    (Object.keys(initialForm) as FormFieldName[]).forEach((field) => {
        const error = validateField(field, data[field]);
        if (error) {
            nextErrors[field] = error;
        }
    });

    return nextErrors;
};

const getFieldClassName = (fieldName: FormFieldName, errors: FormErrors) => {
    const hasError = Boolean(errors[fieldName]);

    return [
        "w-full border bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition",
        hasError ? "border-red-400 focus:border-red-500" : "border-[#cfe0ee] focus:border-[#0b78b7]",
    ].join(" ");
};

export default function ContactForm() {
    const { success, error } = useToast();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        const fieldName = name as FormFieldName;

        setForm((current) => ({ ...current, [fieldName]: value }));

        const nextError = validateField(fieldName, value);
        setErrors((current) => ({
            ...current,
            [fieldName]: nextError || undefined,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nextErrors = validateForm(form);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            error("Please fix the highlighted fields before submitting.");
            return;
        }

        setIsSubmitting(true);

        try {
            await contactApi.submitContact({
                name: form.name.trim(),
                email: form.email.trim(),
                service: form.service || null,
                message: form.message.trim(),
            });

            success("Message sent successfully", "We will get back to you shortly.");
            setForm(initialForm);
            setErrors({});
        } catch (submissionError) {
            const message =
                submissionError instanceof Error
                    ? submissionError.message
                    : "Your enquiry could not be sent right now.";

            error("Unable to send your message", message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="border border-[#cfe0ee] bg-white p-6 shadow-[0_20px_55px_rgba(7,26,45,0.08)] sm:p-8 lg:p-10">
            <div className="mb-7 border-b border-[#e6eef5] pb-5">
                <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                    Project enquiry
                </p>
                <h2
                    className="mt-3 text-2xl font-black sm:text-3xl"
                    style={{
                        fontFamily: "var(--font-glacial-indifference), sans-serif",
                    }}
                >
                    Tell us a little about what you need.
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold">
                        Your name
                        <input
                            name="name"
                            type="text"
                            required
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            placeholder="Jane Doe"
                            value={form.name}
                            onChange={handleChange}
                            className={getFieldClassName("name", errors)}
                        />
                        {errors.name ? (
                            <span id="name-error" className="text-xs font-medium text-red-600">
                                {errors.name}
                            </span>
                        ) : null}
                    </label>

                    <label className="grid gap-2 text-sm font-semibold">
                        Email address
                        <input
                            name="email"
                            type="email"
                            required
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            placeholder="jane@company.com"
                            value={form.email}
                            onChange={handleChange}
                            className={getFieldClassName("email", errors)}
                        />
                        {errors.email ? (
                            <span id="email-error" className="text-xs font-medium text-red-600">
                                {errors.email}
                            </span>
                        ) : null}
                    </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold">
                    What can we help with?
                    <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? "service-error" : undefined}
                        className={getFieldClassName("service", errors)}
                    >
                        <option value="" disabled>
                            Select a service
                        </option>
                        <option>Web development</option>
                        <option>Mobile app development</option>
                        <option>UI/UX design</option>
                        <option>Custom software</option>
                        <option>Digital marketing or social media</option>
                        <option>Something else</option>
                    </select>
                    {errors.service ? (
                        <span id="service-error" className="text-xs font-medium text-red-600">
                            {errors.service}
                        </span>
                    ) : null}
                </label>

                <label className="grid gap-2 text-sm font-semibold">
                    Tell us about the project
                    <textarea
                        name="message"
                        required
                        rows={5}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        placeholder="What are you trying to build, improve, or solve?"
                        value={form.message}
                        onChange={handleChange}
                        className={`${getFieldClassName("message", errors)} resize-y`}
                    />
                    {errors.message ? (
                        <span id="message-error" className="text-xs font-medium text-red-600">
                            {errors.message}
                        </span>
                    ) : null}
                </label>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b] disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {isSubmitting ? "Sending..." : "Send enquiry"}
                    <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
            </form>
        </div>
    );
}
