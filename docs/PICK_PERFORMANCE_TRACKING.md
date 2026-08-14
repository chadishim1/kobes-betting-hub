# Pick-Performance Tracking Plan

## Integrity standard

Every public or member pick gets a ledger row before or at publication. Original selection, line, odds, stake, timestamp, and audience are immutable. Later changes are events, never overwritten history.

## Required fields

| Field | Rule |
|---|---|
| `pick_id` | stable unique ID, e.g. `KBH-20260813-001` |
| `published_at_utc`, `event_start_at_utc` | actual visibility and scheduled start |
| `sport`, `league`, `event` | normalized labels |
| `market`, `selection`, `line` | exact bet; line nullable only if inapplicable |
| `odds_american` | signed integer; derive decimal odds |
| `sportsbook_or_price_source` | where quoted price was available |
| `stake_units`, `unit_convention` | amount plus `risk` or `to_win`; select default before launch |
| `pick_type`, `audience` | straight/parlay/future/prop/live; paid/free/promotional |
| `source_credit` | origin and required attribution |
| `approved_by`, `approval_at_utc` | accountable pre-publication review |
| `post_reference` | member-visible evidence |
| `status` | pending/win/loss/push/void/partial/cashout |
| `settled_at_utc`, `result_source`, `net_units` | evidence and computed outcome |

Do not record a pick taken from a partner community unless a separately approved source/permission process exists. This plan grants no partner access.

## Workflow

Draft and assign ID; verify event/market/price/source/units/time; obtain named approval; write ledger row; publish the identical pick; capture post reference/time; settle from the defined official source; validate arithmetic/completeness; include every result—including losses, pushes, and voids—in the recap.

## Settlement math

Recommended default: **risk units**.

- Win at positive odds: `stake_units * odds / 100`
- Win at negative odds: `stake_units * 100 / abs(odds)`
- Loss: `-stake_units`; push/void: `0`

Parlays are one pick at combined price unless legs were separately released. Futures remain pending. Partial results/cash-outs require a documented formula and distinct status.

## Corrections and reporting

- Corrections record old/new value, reason, actor, and time and notify the same audience.
- Changed opinions are new picks or explicit pre-start cancellations; they never erase originals.
- Grade the exact released price, not a better later price. Member-visible evidence controls conflicts.
- Never delete losses, add winners retroactively, reclassify audience, or use unavailable prices.
- Report record, net units, ROI, units risked, settled/pending/void counts, and date range together.
- Segment paid, free, demo, straight, parlay, and futures. State unit convention and methodology.
- Keep graphics reproducible from the ledger and independently check before publication.

## Quality checks

Flag duplicate IDs, publication after start, missing line/odds, nonpositive stake, invalid American odds between -100 and +100, missing ledger/post pairs, unsourced results, and arithmetic mismatch. Recap totals must equal ledger totals. Weekly, trace five rows to publication evidence and results.

Start with `trackers/pick-ledger.csv`; keep append-only backups and restricted edit permissions.

