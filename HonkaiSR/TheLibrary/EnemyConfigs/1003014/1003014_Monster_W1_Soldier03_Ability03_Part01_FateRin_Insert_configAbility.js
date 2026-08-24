const configAbility = {
  "fileName": "1003014_Monster_W1_Soldier03_Ability03_Part01_FateRin_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"623050592\">Enemy_W1_Soldier03_Passive_FateRin_DamageReduce</a>"
    },
    {
      "name": "Consume",
      "consumeFrom": "CurrentHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": 0.8,
      "consumeFloor": 1
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}