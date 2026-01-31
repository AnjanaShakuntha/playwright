const { test, expect } = require('@playwright/test');

const testData = [
    { id: 'TC_01', input: 'mata bath oonee.', expected: 'මට බත් ඕනේ.' },
    { id: 'TC_02', input: 'oya enavaanam mama balan innavaa.', expected: 'ඔය එනවානම් මම බලන් ඉන්නවා.' },     
    { id: 'TC_03', input: 'vahaama enna.', expected: 'වහාම එන්න.' },

    { id: 'Pos_Fun_0004', input: 'mama kadee yanavaa', expected: 'මම කඩේ යනවා' },
    { id: 'Pos_Fun_0005', input: 'mama  rajayee hospital ekata yanavaa', expected: 'මම  රජයේ hospital එකට යනවා' },
    { id: 'Pos_Fun_0006', input: 'mama iyee cinema halata giyaa', expected: 'මම ඉයේ cinema හලට ගියා' },

    { id: 'Pos_Fun_0007', input: 'mama udhee 6.30ta naegitinava, passee muhuna hoodhanava', expected: 'මම උදේ 6.30ට නැගිටිනව, පස්සේ මුහුන හෝදනව' },
    { id: 'Pos_Fun_0008', input: 'oyaa enne naethnam, apita cinema halata yanna baee', expected: 'ඔයා එන්නෙ නැත්නම්, අපිට cinema හලට යන්න බෑ' },
    { id: 'Pos_Fun_0009', input: 'oyaata Sinhala liyananna puLuvandha?', expected: 'ඔයාට Sinhala ලියනන්න පුළුවන්ද?' },
    
    { id: 'Pos_Fun_0010', input: 'meeka ganna', expected: 'මේක ගන්න' },
    { id: 'Pos_Fun_0011', input: 'mata eeka epaa, sorry', expected: 'මට ඒක එපා, sorry' },
    { id: 'Pos_Fun_0012', input: 'suba udhaeesanak!', expected: 'සුබ උදෑසනක්!' },

    { id: 'Pos_Fun_0013', input: 'ov, hariyata kiyalaa', expected: 'ඔව්, හරියට කියලා' },
    { id: 'Pos_Fun_0014', input: 'karuNaakaralaa, mata me document eka print karanna udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා, මට මෙ document එක print කරන්න උදව්වක් කරන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_0015', input: 'mata hithata bayayi', expected: 'මට හිතට බයයි' },

    { id: 'Pos_Fun_0016', input: 'mama vathura bonavaa', expected: 'මම වතුර බොනවා' },
    { id: 'Pos_Fun_0017', input: 'mata paadam karanna oonee', expected: 'මට පාඩම් කරන්න ඕනේ' },
    { id: 'Pos_Fun_0018', input: 'mama pansal yanavaa', expected: 'මම පන්සල් යනවා' },

    { id: 'Pos_Fun_0019', input: 'mama naala aave', expected: 'මම නාල ආවෙ' },
    { id: 'Pos_Fun_0020', input: 'mama dhaen gedhara yanavaa', expected: 'මම දැන් ගෙදර යනවා' },
    { id: 'Pos_Fun_0021', input: 'ehema karannee naehae ', expected: 'එහෙම කරන්නේ නැහැ' },

    { id: 'Pos_Fun_0022', input: 'apita yanna oonee', expected: 'අපිට යන්න ඕනේ' },
    { id: 'Pos_Fun_0023', input: 'TikTok video ekak balanavaa', expected: 'TikTok video එකක් බලනවා' },
    { id: 'Pos_Fun_0024', input: 'KFC eke yanna oonee', expected: 'KFC eke යන්න ඕනේ' },

    { id: 'Neg_Fun_0001', input: 'brb, ttyl', expected: 'brb, ttyl' },
    { id: 'Neg_Fun_0002', input: 'grr8! l8r!', expected: 'grr8! l8r!' },
    { id: 'Neg_Fun_0003', input: 'MaMa vAtUrA bOnAvAa', expected: 'MaMa vAtUrA bOnAvAa' },
    
    { id: 'Neg_Fun_0004', input: 'mamakadeyanavaapitayannaoonee', expected: '[Unsegmented or incorrect output]' },
    { id: 'Neg_Fun_0005', input: 'kohomdha?', expected: 'kohomdha?' },
    { id: 'Neg_Fun_0006', input: 'wow! eeka hari da?', expected: 'wow! එක හරි ද? OR [Incorrect conversion]' },

    { id: 'Neg_Fun_0007', input: 'machan -> mach', expected: 'mach OR [Incorrect conversion]' },
    { id: 'Neg_Fun_0008', input: ' home -> home', expected: '[Incorrect conversion]' },
    { id: 'Neg_Fun_0009', input: '	kohomaddha??', expected: '[Incorrect conversion]' },
    { id: 'Neg_Fun_0010', input: 'if(oya==hri){api yamu}', expected: '[Garbled output]' },

    { id: 'Pos_UI_0001', input: 'api enavaa', expected: 'As the user types, the output field should automatically update to "අපි එනවා' },




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