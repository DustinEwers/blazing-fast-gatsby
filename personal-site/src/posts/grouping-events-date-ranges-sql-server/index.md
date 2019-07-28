---
id: 521
title: Grouping Events by Date Ranges In SQL Server
date: 2018-02-09T18:22:46+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=521
permalink: /grouping-events-date-ranges-sql-server/
thrive_post_fonts:
  - '[]'
categories:
  - Data Analysis
---
Let's say you have a table of events. Each event has a beginning and an ending date. How would you get a list of the events that happened within each quarter?

Example: A event that begins on 2-1-2017 and ends on 8-1-2017 would have an entries for Q1 2017, Q2 2017, and Q3 2017.

If you're dealing with a single value, you can just use DATEPART(quarter, [DateValue]), but if you're looking to figure out if an event occurs in a range, it's a little more complicated. Here's how to do it.
<h3>Getting Date Ranges</h3>
The first step to getting this data is to get a list of quarters with their respective date ranges. One way to do this is to use a <a href="https://technet.microsoft.com/en-us/library/ms186243(v=sql.105).aspx" target="_blank" rel="noopener">recursive common table expression</a>. CTE's are snippets of SQL that you can put above your main query to create tables to join against. A recursive CTE creates values by calling itself. Here's a CTE that'll give us a list of quarters from the start date to the current date. When using recursive CTEs, make sure you have a termination condition or you'll have a nice infinite loop on your hands.

~~~~

DECLARE @start Date = '01-01-2010';
DECLARE @End Date = GETDATE();

WITH Quarters_CTE
AS
(
SELECT @start as [Start], DateAdd(quarter, 1, @start) AS [End], DATEPART(quarter, @start) AS [Quarter], DATEPART(year, @start) AS [Year]
UNION ALL
SELECT DateAdd(quarter, 1, [Start]), DateAdd(quarter, 1, [End]), DATEPART(quarter, DateAdd(quarter, 1, [Start])), DATEPART(year, DateAdd(quarter, 1, [Start]))
FROM Quarters_CTE
WHERE [End] &lt; @end
)
SELECT * FROM Quarters_CTE Q

~~~~
<h3>Matching Quarters To Events</h3>
The next step is compare our events with the quarters. We want a different entry for each quarter the event occurs in. To do this you can join up with the table. You can use non-equality based comparison operators in join queries, so we filter by date range. Here's the complete query:

~~~~

DECLARE @start Date = '01-01-2010';
DECLARE @End Date = GETDATE();

WITH Quarters_CTE
AS
(
SELECT @start as [Start], DateAdd(quarter, 1, @start) AS [End], DATEPART(quarter, @start) AS [Quarter], DATEPART(year, @start) AS [Year]
UNION ALL
SELECT DateAdd(quarter, 1, [Start]), DateAdd(quarter, 1, [End]), DATEPART(quarter, DateAdd(quarter, 1, [Start])), DATEPART(year, DateAdd(quarter, 1, [Start]))
FROM Quarters_CTE
WHERE [End] &lt; @end
)
SELECT * FROM Quarters_CTE Q
JOIN [Events] E ON e.StartDate &lt; q.[End] AND (e.EndDate is null OR e.EndDate &gt; q.[Start])

~~~~

From there you can aggregate your data as needed.