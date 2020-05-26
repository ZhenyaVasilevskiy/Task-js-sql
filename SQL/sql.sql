1.SELECT * FROM Employee AS employees
WHERE employees.salary = (SELECT MAX(salary) FROM Employee AS max WHERE max.department_id = employees.department_id);

2.
SELECT department_id FROM Employee GROUP BY department_id HAVING COUNT(*) <= 3;

3.WITH dep_salary AS (SELECT department_id, sum(salary) AS salary FROM employee GROUP BY department_id) -
SELECT department_id FROM dep_salary
WHERE dep_salary.salary = (SELECT max(salary) FROM dep_salary);
/*группируем отделы в блоки по общей ЗП
,далее из группы отделов берем тот,где ЗП максимальна*/

4.
INSERT INTO Employee (id,Name)
    VALUES(NULL,Name);
INSERT INTO department (id,Name)
    VALUES(LAST_INSERT_ID(),Name);
