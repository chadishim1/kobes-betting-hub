# Member Onboarding Playbook

Manual, ready-to-implement plan for the Betting Hub relaunch. It requires no access to partner communities, Discord credentials, or account automation.

## Decisions before launch

| Decision | Recommended default |
| --- | --- |
| Price and renewal | `[DECISION NEEDED]` |
| Returning-member offer | 30% off the first month, one use, seven-day claim window |
| Eligibility | Paid member before `[CUTOFF DATE]` |
| Refund/cancellation policy | `[DECISION NEEDED]`; visible before checkout |
| Past-due grace period | `[DECISION NEEDED]` |
| Support owner/backup | `[PRIMARY]` / `[BACKUP]` |
| Support service level | Within one business day; publish hours and timezone |
| Launch | `[DATE, TIME, TIMEZONE]` |

These defaults are proposals, not approved customer terms. Test eligibility, expiry, renewal price, stacking, and attempted reuse before launch.

## Channel blueprint

| Channel | Audience/posters | Purpose |
| --- | --- | --- |
| `#start-here` | Everyone/admins | Welcome, setup, official links, policies |
| `#announcements` | Everyone/Kobe and admins | Service and launch updates |
| `#rules-and-safety` | Everyone/admins | Conduct, impersonation warning, responsible gambling |
| `#how-to-use-the-hub` | Everyone/admins | Channel guide, pick notation, notifications |
| `#support` | Everyone/members and support | Help entry point; move private details to the approved private route |
| `#official-picks` | Active members/approved posters | Final approved picks only |
| `#pick-updates` | Active members/approved posters | Line changes, passes, corrections |
| `#daily-recaps` | Active members/approved posters | Results and transparent unit recap |
| `#member-chat` | Active members | General discussion |
| `#questions` | Active members | Questions about published picks |
| `#pick-review` | Approved team | Draft, attribution check, approval |
| `#support-log` | Support/admins | Minimal case log; no card data |
| `#ops-updates` | Team | Coverage and known issues |

Add sport-specific channels only when volume makes `#official-picks` difficult to follow.

## Role blueprint

| Role | Scope |
| --- | --- |
| `@Kobe` | Kobe's single official account; unique color and separate display |
| `@Admin` | Configuration and high-level moderation; smallest possible group |
| `@Support` | Member help and billing routing; no pick-posting rights by default |
| `@Approved Poster` | Post approved picks/updates only where required |
| `@Active Member` | Paid-channel visibility |
| `@Past Due` | Start/support visibility only during or after the approved grace period |
| `@Returning Member` | Eligibility/measurement only; never grants paid access |
| `@Muted` | Rules/support visibility without posting |

Use least privilege. Do not give ordinary support or publishing roles `Administrator`. Log manual role changes with timestamp, member identifier, reason, and staff owner.

## New-member journey

1. Checkout shows price, renewal, cancellation/refund terms, and responsible-gambling language.
2. Confirmation provides one official access route and the scam warning.
3. Staff verify entitlement and manually assign `@Active Member` until a supported integration is approved.
4. Member reads `#start-here`, safety rules, and the channel guide.
5. Member visits `#official-picks`, `#pick-updates`, then `#daily-recaps`.
6. Support sends the optional 24–48-hour check-in.

Track only necessary outcomes: paid, access granted, welcome completed, and first issue resolved.

## Support flows

Universal rule: acknowledge, classify, give an expected response time, and move personal details to the approved private route. Never ask for passwords, one-time codes, full card numbers, crypto, or device access.

### Paid but missing access

1. Request checkout email and order ID privately; screenshots are optional and must be redacted.
2. Verify with the payment provider—never accept a screenshot alone.
3. Check active, pending, past-due, canceled, refunded, or unmatched status.
4. Grant access only when verified; log the action or escalate unmatched payments.
5. Confirm the member can see `#official-picks` before closing.

### Lost access or past due

1. Check renewal failure, cancellation, refund, moderation, and accidental role removal.
2. Restore only after entitlement is verified.
3. For failed payment, send only the provider's official payment-update link.
4. Apply the approved grace period, then move unresolved accounts to `@Past Due`.

### Charge, cancellation, or refund

1. Acknowledge without promising a refund.
2. Collect order ID and checkout email privately.
3. Escalate to `[BILLING OWNER]`; apply the published policy consistently.
4. Confirm the result in writing and log it without card data.

### Pick correction

Route questions to `#questions` and suspected errors to the pick owner. Publish confirmed corrections in `#pick-updates` with a timestamp and preserve the original record. Never silently alter a settled pick or result.

### Impersonation/scam

1. Tell the member not to reply, click, pay, or share information.
2. Capture account name/ID, message link, time, and screenshot if safe.
3. Escalate immediately to `@Admin`; use normal block, ban, and report controls.
4. Warn everyone only if others may be affected; never repeat the scam link.
5. If money or credentials were shared, advise contacting the bank/provider and securing the affected account immediately.

| Severity | Examples | Target/owner |
| --- | --- | --- |
| Urgent | Active impersonation, widespread outage | Immediate containment; Admin/Kobe |
| High | Duplicate charge, many affected, wrong official pick | Prioritize during support hours; billing/pick owner |
| Standard | One-member access, cancellation, how-to | One business day; Support |

## Returning-member relaunch plan

Recommended offer: **30% off the first month** for verified returning members, available for seven calendar days. If Kobe chooses 40%, keep it first-month-only and non-stackable.

Final legal/offer line:

> `[30% OR 40%]` off `[FIRST MONTH / TERM]`, valid `[START]` through `[END + TIMEZONE]`, for paid members before `[CUTOFF]`; one use; not stackable; renews at `[PRICE/CADENCE]` unless canceled.

Rollout:

1. Clean the eligibility list and define identity matching.
2. Test full price, discount, renewal, expiry, and attempted reuse.
3. Give support exact eligibility, terms, and exception policy.
4. Announce only through owned, approved channels.
5. Send one reminder 24 hours before expiry.
6. Measure eligible contacts, checkout starts, redemptions, access issues, refunds, and first-renewal retention.

Recovery rules:

- Failed code: verify eligibility and timestamp, then correct under the published policy.
- Missed deadline: consistently apply `[NO EXCEPTIONS / ONE-TIME 24-HOUR COURTESY]`.
- Leaked code: disable it, preserve valid purchases, issue controlled replacements.
- Checkout outage: extend by the documented outage duration and publish the exact new deadline.

## Launch checklist

- [ ] All pricing, renewal, cancellation, refund, discount, and grace-period terms approved.
- [ ] Kobe's official account identified and warning pinned.
- [ ] Permissions tested from staff and member views.
- [ ] Full-price and discounted checkout tested end to end.
- [ ] Manual access assignment/removal tested.
- [ ] Support owner, backup, hours, and private route published.
- [ ] Welcome, safety, support, and relaunch messages ready for manual posting.
- [ ] Sample pick, update, correction, and recap reviewed.
- [ ] No passwords, tokens, customer lists, or payment data stored here.

