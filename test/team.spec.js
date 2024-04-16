const Team = require('../team');

describe('Team', () => {
    it('should add a character to the team', () => {
        const team = new Team();
        const character = {name: 'Warrior'};
        team.add(character);
        expect(team.members.size).toBe(1);
    });

    it('should not allow adding the same character multiple times', () => {
        const team = new Team();
        const character = {name: 'Warrior'};
        team.add(character);
        expect(() => team.add(character)).toThrowError();
    });

    it('should add all characters to the team', () => {
        const team = new Team();
        const character1 = {name: 'Warrior'};
        const character2 = {name: 'Mage'};
        team.addAll(character1, character2);
        expect(team.members.size).toBe(2);
    });

    it('should not allow adding the same characters multiple times in addAll method', () => {
        const team = new Team();
        const character1 = {name: 'Warrior'};
        const character2 = {name: 'Mage'};
        team.addAll(character1, character2);
        expect(() => team.addAll(character1, character2)).toThrowError();
    });

    it('should convert Set to an Array', () => {
        const team = new Team();
        const character1 = {name: 'Warrior'};
        const character2 = {name: 'Mage'};
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual([character1, character2]);
    });
});
