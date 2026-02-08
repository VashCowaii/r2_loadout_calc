const configAbility = {
  "fileName": "8002090_Monster_XP_Minion04_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"222306094\">Enemy_XP_Minion04_EscapingCharge02</a>"
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
      "name": "Entity Escape Battle",
      "triggerEnemyEscape": true
    }
  ],
  "references": []
}