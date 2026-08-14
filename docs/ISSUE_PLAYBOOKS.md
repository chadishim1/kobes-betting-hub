# Refund, Cancellation, and Access Playbooks

Use the payment provider as the money source of truth and the approved membership system as the access source of truth. Never infer payment from a screenshot alone.

## Universal intake

Create a ticket; verify with checkout email/provider-safe method; capture customer, subscription, invoice, and transaction references; record the requested outcome; check for disputes, prior refunds, security issues, or responsible-gambling requests.

## Cancellation

1. Confirm subscription and current term end.
2. Cancel per approved policy: `[AT TERM END / IMMEDIATE]`. Do not delete the customer record.
3. Record request time, action time, effective date, actor, and provider confirmation.
4. Change access only when policy says it ends.
5. Confirm final access date and whether another charge is scheduled.
6. Recheck provider state. Treat renewal after a timely request as P1.

## Refund

Do not launch until `[REFUND WINDOW]`, eligibility, exclusions, partial-refund rule, and exception owner are approved and visible at checkout.

1. Verify charge, currency, amount, date, refund history, allowed usage facts, and dispute status.
2. Classify: duplicate, access failure, accidental renewal, dissatisfaction, fraud, gambling-harm, or other.
3. Calculate exact amount; get approval above `[LIMIT]` or outside policy.
4. Refund only to the original method.
5. Record refund ID, amount, reason, approver, access effect, and time.
6. Tell the member amount/date and use only the provider's current posting-time estimate.
7. Reconcile to the provider report and KPI ledger.

Stop and escalate active disputes, identity mismatch, repeated attempts, off-platform refund requests, threats, takeover, or legal demands.

## Paid but no access

1. Confirm a settled/successful payment and intended plan; pending/failed is not active.
2. Check entitlement creation, identity match, state, and provider/webhook error.
3. Correct only the verified account's entitlement; never grant broad or partner-community access.
4. Verify via the member path or equivalent test account.
5. Send exact next step and request confirmation; escalate if P1 target is missed.

## Access lost after renewal

Confirm renewal and absence of refund/dispute/cancellation/safety suppression; compare subscription and entitlement timestamps; restore correct entitlement; log root cause. Search for other affected members. More than one affected member opens an incident.

## Other billing/access cases

- **Wrong/duplicate access:** remove only excess entitlement; preserve paid access. Treat cross-member data exposure as a privacy incident.
- **Failed/past-due payment:** never collect card data; use provider-hosted update link and documented retry/grace mapping.
- **Chargeback/fraud:** do not pressure withdrawal; preserve acceptance, invoice, access, cancellation, refund, and communication evidence; follow provider deadline; never alter evidence.
- **Gambling-harm request:** stop sales language, mark P0, cancel renewal after verification, suppress promotions where possible, route refund through approved policy/exception owner, and send approved resources. Escalate any reversal request.

## Approved response skeletons

**Acknowledgment:** “We received your request as `[TICKET]`. We’re checking `[ISSUE]` and expect to update you by `[TIME + TIMEZONE]`. Please don’t send card details, passwords, or one-time codes.”

**Cancellation:** “Your membership is canceled effective `[DATE + TIMEZONE]`. Access will `[END NOW / REMAIN THROUGH DATE]`, and `[NO FURTHER CHARGE IS SCHEDULED / EXCEPTION]`. Confirmation: `[REFERENCE]`.”

**Refund:** “We issued `[AMOUNT + CURRENCY]` to the original payment method on `[DATE]`. Reference: `[REFERENCE]`. Posting time depends on your bank; `[PROVIDER-APPROVED ESTIMATE]`.”

**Access restored:** “Your paid access is restored. Please `[EXACT STEP]`. We verified `[CHECK]`; reply if it still doesn’t work.”

