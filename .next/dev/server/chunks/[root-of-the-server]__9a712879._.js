module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/review/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const { code, language, mode } = await request.json();
        if (!code || !language) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing code or language"
            }, {
                status: 400
            });
        }
        // Mock AI review response - replace with real API call
        const mockReview = generateMockReview(code, language);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(mockReview);
    } catch (error) {
        console.error("[/api/review]", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to process review"
        }, {
            status: 500
        });
    }
}
function generateMockReview(code, language) {
    const codeLines = code.split("\n");
    const issues = [];
    const suggestions = [];
    // Simple heuristic checks
    if (code.includes("var ")) {
        issues.push({
            type: "Style",
            severity: "low",
            message: "Consider using `const` or `let` instead of `var` for better scoping.",
            line: codeLines.findIndex((l)=>l.includes("var "))
        });
        suggestions.push("Use `const` or `let` instead of `var` for better variable scoping and to avoid hoisting issues.");
    }
    if (code.includes("console.log") && language === "javascript") {
        issues.push({
            type: "Debug",
            severity: "low",
            message: "Remove console.log statements before production.",
            line: codeLines.findIndex((l)=>l.includes("console.log"))
        });
    }
    if (code.includes("==")) {
        issues.push({
            type: "Bug Risk",
            severity: "medium",
            message: "Avoid using `==` for comparison. Use `===` instead.",
            line: codeLines.findIndex((l)=>l.includes("=="))
        });
        suggestions.push("Replace loose equality (`==`) with strict equality (`===`) to avoid type coercion bugs.");
    }
    if (code.length < 50) {
        suggestions.push("Code is very short. Consider testing with more complex code to get detailed insights.");
    }
    // Generate improved code by replacing detected patterns
    let improvedCode = code;
    improvedCode = improvedCode.replace(/\bvar\b/g, "const");
    improvedCode = improvedCode.replace(/==/g, "===");
    improvedCode = improvedCode.replace(/console\.log$$(.*?)$$;?/g, "// Removed: console.log($1)");
    return {
        issues: issues.length > 0 ? issues : [
            {
                type: "Info",
                severity: "low",
                message: "Code looks good!"
            }
        ],
        suggestions: suggestions.length > 0 ? suggestions.join(" ") : "Your code is well-written! Consider adding more complex patterns for detailed suggestions.",
        improved_code: improvedCode
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9a712879._.js.map