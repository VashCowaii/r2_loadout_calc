const configAbility = {
  "fileName": "8002091_Monster_XP_Minion04_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_01_EscapingCharge02"
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Mark Entity For Immediate Death"
    },
    "Trigger: Ability End",
    {
      "name": "Entity Escape Battle"
    }
  ],
  "references": []
}