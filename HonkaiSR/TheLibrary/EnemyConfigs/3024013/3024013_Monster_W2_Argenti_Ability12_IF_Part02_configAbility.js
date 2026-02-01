const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability12_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Sword_FirstFlag",
      "value": 1
    },
    {
      "name": "Random Event",
      "odds": [
        0.5,
        0.5
      ],
      "execute": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Argenti_SummonAllMonsters",
          "variables": {
            "SummonMonsterID": {
              "operator": "Variables[0] (SummonID03) || RETURN",
              "displayLines": "SummonID03",
              "constants": [],
              "variables": [
                "SummonID03"
              ]
            },
            "DelayRatio04": {
              "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
              "displayLines": "{[Skill12[0]]}",
              "constants": [],
              "variables": [
                "{[Skill12[0]]}"
              ]
            },
            "DelayRatio02": {
              "operator": "Variables[0] ({[Skill12[3]]}) || RETURN",
              "displayLines": "{[Skill12[3]]}",
              "constants": [],
              "variables": [
                "{[Skill12[3]]}"
              ]
            },
            "DelayRatio01": {
              "operator": "Variables[0] ({[Skill12[2]]}) || RETURN",
              "displayLines": "{[Skill12[2]]}",
              "constants": [],
              "variables": [
                "{[Skill12[2]]}"
              ]
            },
            "DelayRatio03": {
              "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
              "displayLines": "{[Skill12[1]]}",
              "constants": [],
              "variables": [
                "{[Skill12[1]]}"
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Argenti_SummonAllMonsters",
          "variables": {
            "SummonMonsterID": {
              "operator": "Variables[0] (SummonID03) || RETURN",
              "displayLines": "SummonID03",
              "constants": [],
              "variables": [
                "SummonID03"
              ]
            },
            "DelayRatio04": {
              "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
              "displayLines": "{[Skill12[1]]}",
              "constants": [],
              "variables": [
                "{[Skill12[1]]}"
              ]
            },
            "DelayRatio02": {
              "operator": "Variables[0] ({[Skill12[2]]}) || RETURN",
              "displayLines": "{[Skill12[2]]}",
              "constants": [],
              "variables": [
                "{[Skill12[2]]}"
              ]
            },
            "DelayRatio01": {
              "operator": "Variables[0] ({[Skill12[3]]}) || RETURN",
              "displayLines": "{[Skill12[3]]}",
              "constants": [],
              "variables": [
                "{[Skill12[3]]}"
              ]
            },
            "DelayRatio03": {
              "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
              "displayLines": "{[Skill12[0]]}",
              "constants": [],
              "variables": [
                "{[Skill12[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W2_Argenti_IF_EX_PowerAdd"
    },
    "Trigger: Ability End"
  ],
  "references": []
}