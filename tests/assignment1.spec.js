const { test, expect } = require('@playwright/test');

const testData = [
    { id: 'TC_01', input: 'mama gedhara yanava', expected: 'මම ගෙදර යනව' },
    { id: 'TC_02', input: 'shubha dhavasak', expected: 'සුභ දවසක්' },     
    { id: 'TC_03', input: 'oyaata kohomadha', expected: 'ඔයාට කොහොමද' },

    { id: 'Pos_Fun_0004', input: 'mama kadee yanavaa', expected: 'මම කඩේ යනවා' },
    { id: 'Pos_Fun_0005', input: 'mama  rajayee hospital ekata yanavaa', expected: 'මම  රජයේ hospital එකට යනවා' },
    { id: 'Pos_Fun_0006', input: 'mama iyee cinema halata giyaa', expected: 'මම ඉයේ cinema හලට ගියා' },

    { id: 'Pos_Fun_0007', input: 'mama udhee 6.30ta naegitinava, passee muhuna hoodhanava', expected: 'මම උදේ 6.30ට නැගිටිනව, පස්සේ මුහුන හෝදනව' },
    { id: 'Pos_Fun_0008', input: 'oyaa enne naethnam, apita cinema halata yanna baee', expected: 'ඔයා එන්නෙ නැත්නම්, අපිට cinema හලට යන්න බෑ' },
    { id: 'Pos_Fun_0009', input: 'mama iyee cinema halata giyaa', expected: 'මම ඉයේ cinema හලට ගියා' },
    
    { id: 'Pos_Fun_0010', input: 'apiyaage gedara aluthenawa', expected: 'අපියාගේ ගෙදර අලුතෙනව' },
    { id: 'Pos_Fun_0011', input: 'ammaa thamaage pothak kinnee naa', expected: 'අම්මා තමාගේ පොතක් කින්නේ නෑ' },
    { id: 'Pos_Fun_0012', input: 'thaththaage gaadiya aluthenawa', expected: 'තාත්තාගේ ගාඩිය අලුතෙනව' },

   ];


test.describe('Singlish to Sinhala Automation Suite', () => {
    
    for (const data of testData) {
        test(`Test Case ${data.id}: ${data.input}`, async ({ page }) => {
            test.setTimeout(60000);
            await page.goto('https://www.swifttranslator.com/');

            // Input
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputArea.fill(data.input);
            await page.keyboard.press('Space');

            // --- වඩාත් නිවැරදි ලොකේටරය ---
            // 'Sinhala' යන පෙළ සහිත div එකට පසුව ඇති, ප්‍රතිඵලය පෙන්වන නිශ්චිත පෙට්ටිය තෝරා ගැනීම.
            const outputArea = page.locator('div:has-text("Sinhala") + div.bg-slate-50, div.bg-slate-50').last();

            // ප්‍රතිඵලය එනතෙක් උපරිම තත්පර 10ක් බලා සිටීම
            await expect(outputArea).not.toBeEmpty({ timeout: 10000 });

            // අගය ලබා ගැනීම
            const rawText = await outputArea.innerText();
            
            // "Copy", "Clear" වැනි බොත්තම් වල අකුරු අහඹු ලෙස එකතු වේ නම් ඒවා ඉවත් කිරීම
            const cleanedActual = rawText.split('\n')[0].trim();

            console.log(`[${data.id}] Input: ${data.input}`);
            console.log(`     - Expected: ${data.expected}`);
            console.log(`     - Actual  : ${cleanedActual}`);

            // Assertion
            expect.soft(cleanedActual).toContain(data.expected);
            
            if (cleanedActual.includes(data.expected)) {
                console.log(`     - Result  : ✅ PASS`);
            } else {
                console.log(`     - Result  : ❌ FAIL (Mismatch)`);
            }
        });
    }
});
///////