const configAbility = {
  "fileName": "8032031_Monster_W3_AventurinePart_DeathRattle_RL",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Punishment of Defeat"
    },
    "Deleted bullshit",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DeathRattle_RL_Count"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "DeathRattle_RL",
        "compareType": "=",
        "value2": 1
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DeathRattle_RL_Count",
          "value": 1,
          "max": 4
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "state": "Die_Explod",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>[<span class=\"descriptionNumberColor\">Forever Concealed</span>]",
                    "includePreDeath": true
                  }
                }
              ]
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W3_Aventurine_00"
          },
          "scope": "TargetEntity",
          "variableName": "DiceDeathRattleInsertCheck",
          "value": 0
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "W3_Aventurine_00"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] (DeathRattle_RL_Count) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * DeathRattle_RL_Count)",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}",
            "DeathRattle_RL_Count"
          ]
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "operator": "Variables[0] ({[Skill01[1]]}) || Variables[1] (DeathRattle_RL_Count) || MUL || RETURN",
          "displayLines": "({[Skill01[1]]} * DeathRattle_RL_Count)",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}",
            "DeathRattle_RL_Count"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Imaginary"
        },
        "Tags": null,
        "attackType": "Basic ATK"
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}