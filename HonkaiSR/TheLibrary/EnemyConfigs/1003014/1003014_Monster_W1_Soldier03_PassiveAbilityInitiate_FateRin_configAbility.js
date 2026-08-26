const configAbility = {
  "fileName": "1003014_Monster_W1_Soldier03_PassiveAbilityInitiate_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-35846482\">Enemy_W1_Soldier03_BattleScore1</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "W1_Soldier03_00_SummonCounter"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "W1_Soldier03_00_AICounter",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-888445549\">Enemy_W1_Soldier03_NoInsert</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-746711674\">Enemy_W1_Soldier03_Passive_FateRin</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-888445549\">Enemy_W1_Soldier03_NoInsert</a>",
      "latentQueue": [
        "W1_Soldier03_00_SummonCounter",
        "W1_Soldier03_00_AICounter"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1158230799\">Enemy_W1_Soldier04_AbilityP01_EnterBattle</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1158230799\">Enemy_W1_Soldier04_AbilityP01_EnterBattle</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__623050592\">Enemy_W1_Soldier03_Passive_FateRin_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "description": "DMG taken decreases <span class=\"descriptionNumberColor\">ReduceRatio</span>.",
      "type": "Other",
      "effectName": "DMG Mitigation",
      "statusName": "DMG Mitigation",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ReduceRatio) || RETURN",
                "displayLines": "ReduceRatio",
                "constants": [],
                "variables": [
                  "ReduceRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-746711674\">Enemy_W1_Soldier03_Passive_FateRin</a>",
      "latentQueue": [
        "W1_Soldier03_00_SummonCounter",
        "W1_Soldier03_00_AICounter"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"623050592\">Enemy_W1_Soldier03_Passive_FateRin_DamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "ReduceRatio": 0.9
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W1_Soldier03_Ability02_Part01_FateRin",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    }
  ]
}