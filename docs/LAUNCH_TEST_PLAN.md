# Launch Test Plan

## Exit standard

Launch only when all critical tests pass, no P0/P1 defect remains, policies/disclosures are approved, reconciliation is exact, and the pilot covers the required billing and access lifecycle.

Use provider sandbox/test mode and dedicated accounts—never customer payment data. Log `test_id`, version, tester, UTC time, inputs, expected/actual result, evidence, status, and defect. Test mobile and desktop in current Chrome, Safari, and another supported browser. Use only owned/approved systems; do not access partner Discord communities.

## 1. Policy and content

- [ ] Price, cadence, renewal, cancellation, refund, support hours, and contact path match across site, checkout, receipt, FAQ, and terms.
- [ ] Recurring charge is conspicuous and consent recorded.
- [ ] Age, responsible-gambling, performance, and help disclosures are present/readable; links work.
- [ ] No guaranteed, risk-free, wealth, or loss-chasing language.
- [ ] Privacy policy covers fields, providers, retention, deletion, and controls.
- [ ] Legal/compliance owner approves jurisdictions, age, terms, privacy, refunds, marketing, and affiliates.

## 2. Checkout and billing

- [ ] Successful purchase creates one customer/subscription with correct receipt, tax, and currency.
- [ ] Declined, pending, abandoned, and duplicate submissions grant no duplicate charge/access.
- [ ] Valid, expired, exhausted, and ineligible coupons behave correctly.
- [ ] Renewal success/failure, retry, grace, recovery, and final failure follow policy.
- [ ] Term-end/immediate cancellation, eligible/ineligible refund, partial/full rule, and refund reconciliation pass.
- [ ] Dispute state preserves evidence/accounting. Payment updates use provider-hosted pages only.

## 3. Access lifecycle

- [ ] Eligible payment grants exactly intended entitlement within 5 minutes; failed/pending grants none.
- [ ] Renewal preserves access; failures, cancellation, and refund follow mapped state/effective date.
- [ ] Email case/change, duplicate account, expired link, logged-out user, and retries behave safely.
- [ ] Replayed/out-of-order events are idempotent and cannot replace a newer valid state.
- [ ] Support can restore one verified member without affecting others.
- [ ] Reconciliation flags paid/no access and access/no eligible payment.

## 4. Support drills

- [ ] Drill cancellation, eligible/denied refund, paid/no access, lost renewal access, failed payment, duplicate charge, dispute, privacy concern, and gambling-harm request.
- [ ] Staff use ticket IDs, safe verification, priority, response, and escalation correctly.
- [ ] Nobody asks for card data, passwords, one-time codes, or unnecessary IDs.
- [ ] P0/P1 timers, handoff, updates, after-hours owner, and closure details work.

## 5. Pick tracking and dashboard

- [ ] Publish/settle/recap a win, loss, push, void, positive-price pick, negative-price pick, parlay, and future.
- [ ] Arithmetic and recap match the ledger.
- [ ] Correction creates a visible event without overwriting history.
- [ ] Late/missing fields, duplicate IDs, invalid odds, and after-start publication are flagged.
- [ ] Paid/free/demo segments remain separate and raw rows reproduce dashboard totals.
- [ ] Performance claims include period, count, units/ROI context, methodology, and disclaimer.

## 6. Security and resilience

- [ ] Least privilege, MFA where available, and removal of former/test users.
- [ ] No secrets in repository, tickets, analytics, screenshots, or client code; logs redact sensitive data.
- [ ] Backup/restore works; delayed, duplicate, missing, and malformed events are observable/recoverable.
- [ ] Privacy requests follow policy and a broad-outage update can be published.

## 7. Pilot and go/no-go

Pilot with `[5-20]` consented testers for `[7-14]` days or long enough to cover the needed lifecycle.

- [ ] Daily reconciliation has zero unexplained exceptions.
- [ ] Access success >=99%; all P1 failures resolved and root-caused.
- [ ] First-response SLA >=90%; no unresolved repeat issue.
- [ ] Every pick has a complete auditable row and recap.
- [ ] Refund, cancellation, renewal, and gambling-harm drills are signed off.
- [ ] Support, rollback, launch-day communication, and first-24-hour monitoring owners are assigned.

## Stop-launch conditions

Undisclosed/unreliable charging; unauthorized access/data exposure; incorrect refund/cancellation or unreconciled money; missing age/responsible-gambling/performance disclosure; irreproducible/overwritten picks; or no owner for P0/P1, billing exceptions, or rollback.

| Sign-off area | Owner | Date | Result | Risk accepted by |
|---|---|---|---|---|
| Product/content | [NAME] | | | |
| Billing/access | [NAME] | | | |
| Support | [NAME] | | | |
| Data/performance | [NAME] | | | |
| Legal/compliance | [NAME] | | | |
| Final go/no-go | [NAME] | | | |

