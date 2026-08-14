# Operations Foundation

**Status:** launch draft  
**Owner:** [OPERATIONS OWNER]  
**Last reviewed:** 2026-08-13

This controls member support across website, email, payment, and member-access requests. It does not authorize access to any partner community.

## Service standard

Publish one support address and one form. Never accept payment details, passwords, one-time codes, IDs, or sportsbook credentials in support messages.

| Priority | Examples | First response | Update cadence | Resolution target |
|---|---|---:|---:|---:|
| P0 | self-harm language, exposed credentials, takeover, broad outage | 15 staffed minutes | 30 minutes | contain immediately |
| P1 | paid/no access, duplicate charge, timely cancellation before renewal | 2 staffed hours | 4 staffed hours | 1 staffed day |
| P2 | refund, wrong plan, isolated missing content | 1 staffed day | daily | 2 staffed days |
| P3 | how-to, feedback, feature request | 2 staffed days | as needed | 5 staffed days |

Publish staffed hours and timezone before accepting payment. These are internal targets until approved for public terms.

## Ticket lifecycle

1. **Receive:** create a ticket; capture channel, received time, member email, category, and requested outcome.
2. **Acknowledge:** give ticket ID, next action, and response target. Ask only for necessary evidence.
3. **Verify:** match the requester using checkout email or provider-safe verification. Never request a full card number.
4. **Classify:** set priority, issue type, subscription state, owner, and due time.
5. **Act:** follow `ISSUE_PLAYBOOKS.md`; record provider IDs and facts, not sensitive payment data.
6. **Confirm:** state the action, effective date, amount if applicable, and any member step.
7. **Close:** require a resolution code and closing time. Reopen on a reply within 7 days.
8. **Review:** inspect all P0/P1 and repeat issues weekly; assign corrective actions for breaches.

## Required ticket fields

`ticket_id`, `created_at_utc`, `channel`, `member_id`, `checkout_email_masked`, `category`, `priority`, `subscription_state`, `owner`, `status`, `due_at_utc`, `summary`, `provider_reference`, `actions_taken`, `resolution_code`, `first_response_at_utc`, `resolved_at_utc`, `refund_amount`, `member_confirmed`.

Restrict ticket access. Define retention/deletion with the privacy policy before launch.

## Roles and authority

| Role | May do | Must escalate |
|---|---|---|
| Support | verify, use approved replies, restore routine access | exceptions, threats, disputes, safety |
| Billing owner | cancel, correct duplicates, policy refunds | refund outside policy/above `[LIMIT]` |
| Operations lead | approve exceptions, coordinate incidents | legal, privacy, security |
| Kobe/content owner | clarify offer or pick record | billing and privacy decisions |

Never alter a pick result, timestamp, price, or settlement to resolve a complaint. Corrections follow `PICK_PERFORMANCE_TRACKING.md`.

## Safety and cadence

- Treat gambling-harm/self-exclusion requests as P0. Stop promotions where possible, give resources from `RESPONSIBLE_GAMBLING.md`, and do not encourage continued betting.
- For immediate danger or self-harm in the U.S., direct the person to 911 or call/text 988. Staff are not crisis counselors.
- Escalate threats, fraud, privacy incidents, exposed credentials, or account takeover.
- Never promise winnings, loss recovery, access timing, or a refund before verification and authorization.
- **Daily:** review overdue tickets; reconcile payments without access, failed renewals, and pending cancellations.
- **Weekly:** review KPIs, refund reasons, repeat contacts, access failures, P0/P1 tickets, and exceptions.
- **Monthly:** audit closed tickets, permissions, refund arithmetic, policies, and help links.

## Required launch decisions

- Support address/form, staffed hours, timezone, and named owners
- Refund window/eligibility, cancellation effective date, and exception authority
- Payment provider and subscription source of truth
- Ticket system, privacy retention, and public response commitments
- Access system and member-state mapping

