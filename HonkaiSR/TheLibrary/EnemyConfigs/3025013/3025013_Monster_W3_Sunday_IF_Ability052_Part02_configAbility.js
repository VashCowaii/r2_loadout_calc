const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_Ability052_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AIFlag",
        "compareType": "=",
        "value2": 10
      },
      "passed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "displayLines": "{[Skill06[3]]}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "canDelay": true,
          "ToughnessDMGType": "Null Type",
          "bypassBreakMute": true
        }
      ],
      "failed": [
        {
          "name": "Deal Toughness DMG",
          "value": {
            "displayLines": "{[Skill05[1]]}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "canDelay": true,
          "ToughnessDMGType": "Null Type",
          "bypassBreakMute": true
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}