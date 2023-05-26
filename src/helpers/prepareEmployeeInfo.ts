import { Employee } from "responseBackend";

/**
 * Функция получает массив сотрудников, на выход отдает строку с информацией о сотрудниках.
 * Каждый сотрудник начинается с новой строчки
 * @param employees - Массив сотрудников
 */
export function prepareEmployeeInfo(employees: Employee[]): string {
    let message = '';

    for (let i = 0; i < employees.length; i++) {
        message += `У сотрудника ${employees[i].name} день Рождения (${employees[i].birthday}), email:${employees[i].email}\n`
    }

    return message.trim();
}
