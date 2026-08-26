const configAbility = {
  "fileName": "5012092_Monster_W3_Clock_03_Ability02_Part01_FateRin",
  "childAbilityList": [
    "5012092_Monster_W3_Clock_03_Ability02_Camera",
    "5012092_Monster_W3_Clock_03_Ability02_Part01_FateRin",
    "5012092_Monster_W3_Clock_03_Ability02_Part02_FateRin",
    "5012092_Monster_W3_Clock_03_Ability03_Part02_FateRin",
    "5012092_Monster_W3_Clock_03_Ability02_Camera_02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Clock_03_Ability02_Part02_FateRin",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Caster}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_Clock_03_Ability03_Part02_FateRin",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"756663200\">Enemy_W3_Clock_03_TargetSelect_ToFriend</a>[<span class=\"descriptionNumberColor\">Verification Error</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-481047812\">Enemy_W3_Clock_03_TargetSelect</a>",
              "valuePerStack": {
                "TargetMark": 0
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1241100156\">Enemy_W3_Clock_03_TargetSelect_ToEnemy</a>"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase_normal"
            },
            "Trigger: Ability End"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target",
    "targetIsVariable": true
  },
  "references": []
}