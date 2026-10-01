function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new Error("Возраст должен быть от 0 до 120 лет");
    }

    console.log("Возраст корректный:", age);
}

try {
    checkAge(150);
} catch (error) {
    console.log("Ошибка:", error.message);
}



function loadData() {
    if (Math.random() < 0.4) {
        throw new Error("Не удалось загрузить данные");
    }

    return "Данные успешно загружены";
}

let successCount = 0;
let errorCount = 0;

for (let i = 1; i <= 10; i++) {
    try {
        const result = loadData();
        console.log(`Попытка ${i}: ${result}`);
        successCount++;
    } catch (error) {
        console.log(`Попытка ${i}: Ошибка — ${error.message}`);
        errorCount++;
    }
}

console.log("Количество успехов:", successCount);
console.log("Количество ошибок:", errorCount);


function withdraw(balance, amount) {
    if (amount < 0) {
        const error = new Error("Сумма не может быть отрицательной");
        error.code = "NEGATIVE_AMOUNT";
        throw error;
    }

    if (amount > balance) {
        const error = new Error("Недостаточно денег на счёте");
        error.code = "NOT_ENOUGH_MONEY";
        throw error;
    }

    return balance - amount;
}



try {
    const balance = 1000;
    const newBalance = withdraw(balance, -100);

    console.log("Остаток:", newBalance);
} catch (error) {
    if (error.code === "NEGATIVE_AMOUNT") {
        console.log("Ошибка: нельзя снять отрицательную сумму.");
    } else if (error.code === "NOT_ENOUGH_MONEY") {
        console.log("Ошибка: недостаточно денег на счёте.");
    } else {
        console.log("Неизвестная ошибка:", error.message);
    }
}



try {
    const balance = 1000;
    const newBalance = withdraw(balance, 1500);

    console.log("Остаток:", newBalance);
} catch (error) {
    if (error.code === "NEGATIVE_AMOUNT") {
        console.log("Ошибка: нельзя снять отрицательную сумму.");
    } else if (error.code === "NOT_ENOUGH_MONEY") {
        console.log("Ошибка: недостаточно денег на счёте.");
    } else {
        console.log("Неизвестная ошибка:", error.message);
    }
}



try {
    const balance = 1000;
    const newBalance = withdraw(balance, 300);

    console.log("Снятие прошло успешно.");
    console.log("Остаток на счёте:", newBalance);
} catch (error) {
    console.log("Ошибка:", error.message);
}