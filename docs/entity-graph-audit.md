# Entity graph audit

## Canonical identity

- Person entity: `https://leilarazavi.github.io/#person`
- Profile page: `https://leilarazavi.github.io/about/`
- Website entity: `https://leilarazavi.github.io/#website`

## Relationships

`Person` is the publisher of the `WebSite` entity.

`ProfilePage.mainEntity` points to the canonical `Person` entity.

Confirmed publication pages identify Dr. Leila Razavi as the same `Person` entity when her name appears in the author list.

Publication entities now also declare their canonical page as `mainEntityOfPage`, keeping the structured-data entity and the page URL explicitly connected.

## Data discipline

Only external profiles already present in `src/lib/person.ts` are exposed through `sameAs`. Unverified credentials and profile URLs remain excluded.
