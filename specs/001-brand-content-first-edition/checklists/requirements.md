# Specification Quality Checklist: Brand & Content — 1st Edition

**Purpose**: Validate specification completeness and quality before proceeding to planning
**Created**: 2026-04-10
**Feature**: [spec.md](../spec.md)

## Content Quality

- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

## Requirement Completeness

- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Success criteria are technology-agnostic (no implementation details)
- [x] All acceptance scenarios are defined
- [x] Edge cases are identified
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

## Feature Readiness

- [x] All functional requirements have clear acceptance criteria
- [x] User scenarios cover primary flows
- [x] Feature meets measurable outcomes defined in Success Criteria
- [x] No implementation details leak into specification

## Notes

- All [NEEDS CLARIFICATION] items resolved via gathered context (product clarifications answered by user before spec was written)
- Technical decisions extracted to `technical-context.md` — not in the spec
- Registration URLs intentionally left as pending (confirmed by user)

---

# Pre-Build Requirements Quality Checklist

**Purpose**: Validate that spec, plan, and tasks are complete and unambiguous enough to implement without PM involvement
**Created**: 2026-04-10
**Phase**: Post-plan · Post-tasks · Pre-implementation

---

## Requirement Completeness

- [ ] CHK001 Are requirements defined for all 11 user stories (US-01 to US-11) — none missing or underspecified? [Completeness, Spec §User Stories]
- [ ] CHK002 Are all 9 i18n message namespaces (`navbar`, `hero`, `info_bar`, `schedule`, `civio_section`, `how_it_works`, `who_for`, `faq`, `footer`) fully specified in data-model.md? [Completeness, data-model.md]
- [ ] CHK003 Are the page `<title>` and meta description copy requirements specified? US-01 mentions "tab/title bar shows a relevant page title" but no copy is defined. [Gap, Spec §US-01]
- [ ] CHK004 Are requirements for the new `civio-section.tsx` complete — logo, title, description, quote, and its position in the page layout relative to other sections? [Completeness, Spec §US-05]
- [ ] CHK005 Are all 6 benefit strings for the "What you get" section (US-06) explicitly provided in the data model or kit? [Completeness, Spec §US-06, data-model.md]

## Requirement Clarity

- [ ] CHK006 Is "legible and correctly proportioned" (US-01 logo AC) quantified with specific width/height or aspect ratio constraints? [Clarity, Spec §US-01]
- [ ] CHK007 Is "accurate translations" (US-09 EN/CA ACs) defined — who determines accuracy, and is it developer judgment or does it require review? [Clarity, Spec §US-09]
- [ ] CHK008 Is "consistent across all sections" (US-03 dates) explicitly mapped to which sections must display dates (info bar, schedule, footer, meta)? [Clarity, Spec §US-03]
- [ ] CHK009 Is it specified whether pending CTAs (`href="#"`) should have a visual indicator (disabled style, tooltip) or look identical to active CTAs? [Clarity, Gap, Spec §US-02, US-11]
- [ ] CHK010 Is the exact copy for the page `<title>` or browser tab specified anywhere in the spec or kit? [Clarity, Gap, Spec §US-01]

## Requirement Consistency

- [ ] CHK011 Are the dates 29–30 mayo 2026 consistent across all spec sections: US-03 AC, US-04 schedule, US-11 footer, and the data model `info_bar.*` and `footer.*` keys? [Consistency, Spec §US-03, US-04, US-11]
- [ ] CHK012 Is the tagline `think · build · help` consistently required in all sections where it should appear: hero (US-02), who-for (US-07), and footer (US-11)? [Consistency, Spec §US-02, US-07, US-11]
- [ ] CHK013 Is the hero CTA text (`Quiero construir algo que se use →`) consistent between US-02 AC and the `hero.cta` key in data-model.md? [Consistency, Spec §US-02, data-model.md]

## Acceptance Criteria Quality

- [ ] CHK014 Can "no placeholder or template content remains" (Success Criteria §5) be objectively measured without an explicit list of known placeholder strings to search for? [Measurability, Spec §Success Criteria]
- [ ] CHK015 Are the US-09 language toggle ACs measurable — does the spec enumerate which sections must update when language is switched? [Measurability, Spec §US-09]
- [ ] CHK016 Is the US-10 sponsors removal AC complete — does it specify that all imports, JSX references, and the file itself must be removed (not just hidden)? [Completeness, Spec §US-10]

## Edge Case Coverage

- [ ] CHK017 Is fallback behavior specified for when `public/civio-logo.svg` cannot be obtained? Research.md mentions "text-only section" as acceptable but spec does not explicitly define this requirement. [Edge Case, Spec §Assumptions, research.md §2]
- [ ] CHK018 Is behavior defined for missing translation keys in `ca.json` or `en.json` (next-intl default fallback to `es` or error)? [Edge Case, Spec §US-09]
- [ ] CHK019 Are requirements defined for special characters (`·`, `→`, `–`) rendering consistently in all three locales and browsers? [Edge Case, data-model.md §Localization Rules]

## Dependencies & Assumptions

- [ ] CHK020 Is the assumption "Catalan and English translations require no external review before launch" explicitly accepted by the product owner? [Assumption, Spec §Assumptions]
- [ ] CHK021 Is the assumption "42 Barcelona venue remains Edificio Telefónica" traceable to a confirmed source, or could it be outdated? [Assumption, Spec §Assumptions]
- [ ] CHK022 Are all 11 user stories traceable to at least one task in tasks.md — no story left without implementation work? [Traceability, tasks.md]

---

## Summary

**Critical gaps — RESOLVED:**
- CHK003 ✅ Page title: "Ship For Good BCN — 1ª Edición" — added to data-model.md `metadata.title` key
- CHK009 ✅ Pending CTAs render as normal active buttons with `href="#"` and inline code comment
- CHK014 ✅ Placeholder strings to replace: `"abril de 2025"`, `"17 de abril"`, `"18 de abril"`, `"Tu logo aquí"`, `"ONG"` references, `"Barcelona, 2025"`, `"edificio Telefónica"` in old context

**Deferred (acceptable to resolve during implementation):**
- CHK006 — Logo dimensions (developer can follow visual inspection; proportions visible in SVG)
- CHK017 — Civio logo fallback (research.md already documents text-only as acceptable)
- CHK018 — next-intl fallback behavior (framework default is ES; acceptable)
