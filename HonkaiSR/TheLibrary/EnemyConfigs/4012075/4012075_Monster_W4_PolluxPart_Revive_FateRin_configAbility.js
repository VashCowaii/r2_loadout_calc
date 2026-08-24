const configAbility = {
  "fileName": "4012075_Monster_W4_PolluxPart_Revive_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"2128016831\">FateRin_ResetFormation</a>",
      "variables": {
        "OnlyCamera": 1
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1045360944\">Monster_W4_PolluxPart_Shield_FateRin</a>"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "healPercent": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": 1,
      "formula": "Heal from Target MaxHP"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}