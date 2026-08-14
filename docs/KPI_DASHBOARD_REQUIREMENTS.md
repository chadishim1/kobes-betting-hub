# KPI Dashboard Requirements

## Reporting rules

- Store timestamps in UTC; report in America/Phoenix. Refresh daily by 09:00 local and after settlement/incidents.
- Filters: date, plan, cohort, sport, source, and channel where sample sizes permit.
- Every metric shows numerator, denominator, definition version, refresh time, and freshness.
- Never show ROI, win rate, or units without settled count and methodology link. Annotate incomplete periods; estimates are not observations.

## Executive scorecard

| KPI | Definition | Launch alert |
|---|---|---|
| Active paid members | unique entitled members with eligible paid state at period end | daily billing/access mismatch |
| New paid members | first successful paid start in period | trend after baseline |
| Gross MRR | normalized recurring value before refunds/fees/tax | lock definition prelaunch |
| Net collected revenue | successful charges less refunds/disputes, excluding tax | any reconciliation gap |
| Logo churn | paid endings / paid memberships at period start | target after baseline |
| Renewal success | successful renewal invoices / renewal invoices due | <95% |
| Refund rate | refunded successful charges / successful charges | >5% or 2x baseline |
| Chargeback rate | disputed charges / successful charges | review every launch dispute |
| Access success | eligible starts entitled within 5 minutes / eligible starts | <99% |
| Access latency | median entitlement time minus payment time | >5 minutes |
| First-response SLA | eligible tickets within priority target / eligible tickets | <90% |
| Resolution time | median created-to-resolved; show staffed and clock hours | baseline first |
| Reopen rate | reopened within 7 days / resolved tickets | >10% |
| CSAT | positive / valid responses, with response count | <80% at n>=10 |

Thresholds are internal defaults pending launch approval.

## Pick-performance panel

- Settled record: wins-losses-pushes; voids separate.
- Win rate: wins / (wins + losses).
- Net units: sum computed `net_units`.
- ROI: net units / units risked; disclose push treatment.
- Average odds (decimal for computation), closing-line value with a defined source and coverage, field completeness, settlement within 24 hours, and correction rate.
- Always separate paid/free/demo and straight/parlay/future results.

## Data, views, and controls

Use `members`, `subscriptions/invoices`, `entitlement_events`, `support_tickets`, `picks`, and `pick_events`; join on immutable provider/event IDs. No raw card data.

Required views: **Today** (starts, failures, P0/P1, overdue, unsettled); **Business** (members/revenue/churn/refunds); **Support** (SLA/reasons/backlog/CSAT); **Performance** (record/units/ROI/coverage/corrections); **Data quality** (freshness/missing/duplicates/reconciliation).

Daily exceptions: paid without access, access without eligible payment, refund without ticket, published pick without ledger row. Reconcile billing/refunds daily; sample five payment-access paths and five settled picks weekly in launch month. Version definitions with effective dates. Restrict source edits and align retention/access with privacy policy.

