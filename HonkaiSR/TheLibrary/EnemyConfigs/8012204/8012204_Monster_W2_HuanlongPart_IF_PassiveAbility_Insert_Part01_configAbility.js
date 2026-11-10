const configAbility = {
  "fileName": "8012204_Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Living State",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "livingState": "Mask_AliveOnly"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          }
        ]
      },
      "passed": [
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
            "Deleted bullshit",
            {
              "name": "Animation Task",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)v2}}"
                  },
                  "value": {
                    "displayLines": "{[PassiveSkill01[2]]}"
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>[<span class=\"descriptionNumberColor\">Flower By Another Name</span>]"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "(SummonerMaxHPValue * {[PassiveSkill01[0]]})"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": {
                      "displayLines": "{[PassiveSkill01[1]]}"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-59801071\">Monster_W2_HuanlongPart_IF_DeathRattle</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}