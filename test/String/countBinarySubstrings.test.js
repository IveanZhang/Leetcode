import countBinarySubstrings from '../../code/String/countBinarySubstrings';

test('countBinarySubstrings:00110011', () => {
    expect(countBinarySubstrings("00110011")).toEqual(['0011','01','1100','10','0011','01']);
});

test('countBinarySubstrings:10101', () => {
    expect(countBinarySubstrings("10101")).toEqual(['10','01','10','01']);
});