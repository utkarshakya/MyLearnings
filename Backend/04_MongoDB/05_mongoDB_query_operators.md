# MongoDB Query Operators

## Comparison Operators

1. **`$eq`**: Matches values that are equal to a specified value.
2. **`$ne`**: Matches values that are not equal to a specified value.
3. **`$gt`**: Matches values that are greater than a specified value.
4. **`$gte`**: Matches values that are greater than or equal to a specified value.
5. **`$lt`**: Matches values that are less than a specified value.
6. **`$lte`**: Matches values that are less than or equal to a specified value.
7. **`$in`**: Matches any value in an array.
8. **`$nin`**: Matches none of the values in an array.

Example:

```javascript
{ age: { $gte: 18, $lte: 25 } } 
// Matches documents where the "age" field is between 18 and 25 (inclusive).
```

## Logical Operators

1. **`$and`**: Matches documents that satisfy all conditions.
2. **`$or`**: Matches documents that satisfy at least one condition.
3. **`$not`**: Inverts the effect of a query expression.
4. **`$nor`**: Matches documents that fail all conditions.

Example:

```javascript
{ $or: [{ age: { $lt: 18 } }, { status: "inactive" }] }
// Matches documents where "age" is less than 18 or "status" is "inactive".
```

## Element Operators

1. **`$exists`**: Matches documents where a field exists or does not exist.
2. **`$type`**: Matches documents where a field is of a specified type.

Example:

```javascript
{ email: { $exists: true }, age: { $type: "number" } }
// Matches documents where the "email" field exists and the "age" field is of type "number".
```

## Evaluation Operators

1. **`$regex`**: Matches strings using regular expressions.
2. **`$expr`**: Allows the use of aggregation expressions in queries.
3. **`$mod`**: Matches numbers divisible by a specified value.

Example:

```javascript
{ name: { $regex: /^A/i }, age: { $mod: [5, 0] } }
// Matches documents where "name" starts with "A" (case-insensitive) and "age" is divisible by 5.
```

## Array Operators

1. **`$all`**: Matches arrays that contain all specified elements.
2. **`$elemMatch`**: Matches arrays that contain at least one element matching all conditions.
3. **`$size`**: Matches arrays with a specified number of elements.

Example:

```javascript
{ tags: { $all: ["mongodb", "database"], $size: 3 } }
// Matches documents where the "tags" array contains "mongodb" and "database" and has exactly 3 elements.
```

## Geospatial Operators

1. **`$geoWithin`**: Matches documents within a specified geometry.
2. **`$near`**: Matches documents near a specified point.

Example:

```javascript
{ location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } } }
// Matches documents where the "location" field is within a sphere defined by the center point [lng, lat] and the radius.
```

## Bitwise Operators

1. **`$bitsAllSet`**: Matches documents where all specified bit positions are set.
2. **`$bitsAnySet`**: Matches documents where any specified bit positions are set.

Example:

```javascript
{ flags: { $bitsAllSet: 6 } }
// Matches documents where the "flags" field has all the bits set as specified by the value 6.
```
