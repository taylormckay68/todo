UPDATE tasks
SET category = $2,
    priority = $3,
    task = $4,
    info = $5
WHERE id = $1