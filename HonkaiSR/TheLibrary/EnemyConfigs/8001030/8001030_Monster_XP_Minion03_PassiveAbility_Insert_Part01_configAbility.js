const configAbility = {
  "fileName": "8001030_Monster_XP_Minion03_PassiveAbility_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Energy Burst"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "PassiveSkill01",
      "passed": [
        {
          "name": "Animation Task"
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)v2}}"
      },
      "popUpText": "Energy Regeneration",
      "living": true
    }
  ],
  "references": []
}