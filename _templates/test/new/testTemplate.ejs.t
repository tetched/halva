---
to: ./tests/<%= name %>.test.js
---
// Generated by Halva
// Test to check the work of the global scope
//
describe('Halva test', () => {
  describe('test global', () => {
    it('Get global var', async () => {
        console.log(halva_accounts[0].address);
    });
  });
});