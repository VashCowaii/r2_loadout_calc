const configAbility = {
  "fileName": "1012020_Monster_W1_GSMecha_01_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Chains of Destruction"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_BoomTimes",
      "value": 1,
      "max": 1
    },
    "Trigger: Attack End"
  ],
  "references": []
}