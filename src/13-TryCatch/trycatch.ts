function test() {
   throw new Error("Test - Something went wrong!");
}

try {
    test();                     // จะเจอ error
    console.log("Hello");       // ข้าม ไม่ถูกเรียก
} catch (error: any) {
    console.error(error.message);  // แสดงข้อความ error
} finally {
    console.log("finally");     // ทำงานเสมอ
}
