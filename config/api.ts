export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5500/api/v1";

export type AuthRole = "USER" | "ADMIN" | "SUPERADMIN";
export type AuthProvider = "LOCAL" | "GOOGLE";

export type AuthUser = {
    id: string;
    name: string | null;
    email: string;
    role: AuthRole;
    image: string | null;
    authProvider: AuthProvider;
    emailVerified: boolean;
    isActive: boolean;
    createdAt?: string;
    updatedAt?: string;
};

export type AuthPayload = {
    user: AuthUser;
    accessToken: string;
    refreshToken: string;
};

export type ApiResponse<T> = {
    success: boolean;
    message?: string;
    data?: T;
    details?: unknown;
};

export type ContactSubmission = {
    id: string;
    name: string;
    email: string;
    service: string | null;
    message: string;
    userId: string | null;
    createdAt: string;
};

export type ContactMessageWithUser = ContactSubmission & {
    user?: {
        id: string;
        name: string | null;
        email: string;
        role: AuthRole;
    } | null;
};

export type QuoteRequest = {
    id: string;
    name: string;
    email: string;
    company: string | null;
    service: string | null;
    budget: string | null;
    timeline: string | null;
    message: string;
    status: "PENDING" | "REVIEWED" | "CONTACTED" | "CLOSED";
    userId: string | null;
    createdAt: string;
    updatedAt?: string;
};

export type QuoteRequestWithUser = QuoteRequest & {
    user?: {
        id: string;
        name: string | null;
        email: string;
        role: AuthRole;
    } | null;
};

const buildUrl = (path: string) => `${API_BASE_URL}${path}`;

const request = async <T>(
    path: string,
    options: RequestInit = {}
): Promise<T> => {
    const response = await fetch(buildUrl(path), {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    });

    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    if (!response.ok) {
        const message =
            typeof payload === "object" && payload && "message" in payload
                ? String((payload as { message?: string }).message)
                : "Request failed";

        throw new Error(message);
    }

    return payload as T;
};

export const authApi = {
    signup: (payload: {
        name?: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) =>
        request<ApiResponse<AuthPayload>>("/auth/signup", {
            method: "POST",
            body: JSON.stringify(payload),
        }),

    signin: (payload: { email: string; password: string }) =>
        request<ApiResponse<AuthPayload>>("/auth/signin", {
            method: "POST",
            body: JSON.stringify(payload),
        }),

    logout: (token?: string) =>
        request<ApiResponse<null>>("/auth/logout", {
            method: "POST",
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        }),

    getMe: (token?: string) =>
        request<ApiResponse<{ user: AuthUser }>>("/auth/me", {
            method: "GET",
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        }),

    refreshToken: (refreshToken: string) =>
        request<ApiResponse<AuthPayload>>("/auth/refresh-token", {
            method: "POST",
            body: JSON.stringify({ refreshToken }),
        }),

    requestPasswordReset: (email: string) =>
        request<ApiResponse<null>>("/auth/request-password-reset", {
            method: "POST",
            body: JSON.stringify({ email }),
        }),

    resetPassword: (token: string, payload: { password: string; confirmPassword: string }) =>
        request<ApiResponse<null>>("/auth/reset-password", {
            method: "POST",
            body: JSON.stringify({ token, ...payload }),
        }),

    sendVerificationEmail: (token?: string) =>
        request<ApiResponse<null>>("/auth/send-verification-email", {
            method: "POST",
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        }),

    verifyEmail: (token: string) =>
        request<ApiResponse<{ user: AuthUser }>>("/auth/verify-email", {
            method: "POST",
            body: JSON.stringify({ token }),
        }),
};

export const userApi = {
    updateProfile: (payload: { name?: string; email?: string; image?: string | null }, token: string) =>
        request<ApiResponse<{ user: AuthUser }>>("/users/me", {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }),

    changePassword: (payload: { currentPassword: string; newPassword: string }, token: string) =>
        request<ApiResponse<null>>("/users/me/password", {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }),

    deleteAccount: (token: string, password?: string) =>
        request<ApiResponse<null>>("/users/me", {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: password ?? "",
                confirmation: "DELETE MY ACCOUNT",
            }),
        }),
};

export const contactApi = {
    submitContact: (
        payload: {
            name: string;
            email: string;
            service?: string | null;
            message: string;
            company?: string;
            budget?: string;
            timeline?: string;
        },
        token?: string
    ) =>
        request<ApiResponse<{ contact: ContactSubmission }>>("/contact/", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        }),

    getMyContacts: (token: string) =>
        request<ApiResponse<{ contacts: ContactSubmission[]; total: number }>>("/contact/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        }),

    getAllContacts: (token: string) =>
        request<ApiResponse<{ contacts: ContactMessageWithUser[]; total: number }>>("/contact/", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        }),
};

export const quoteApi = {
    submitQuote: (
        payload: {
            name: string;
            email: string;
            company?: string | null;
            service?: string | null;
            budget?: string | null;
            timeline?: string | null;
            message: string;
        },
        token?: string
    ) =>
        request<ApiResponse<{ quote: QuoteRequest }>>("/quote/", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        }),

    getMyQuotes: (token: string) =>
        request<ApiResponse<{ quotes: QuoteRequest[]; total: number }>>("/quote/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        }),

    getAllQuotes: (token: string) =>
        request<ApiResponse<{ quotes: QuoteRequestWithUser[]; total: number }>>("/quote/", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        }),

    updateQuoteStatus: (quoteId: string, status: QuoteRequest["status"], token: string) =>
        request<ApiResponse<{ quote: QuoteRequest }>>(`/quote/${quoteId}/status`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        }),
};

export default authApi;
