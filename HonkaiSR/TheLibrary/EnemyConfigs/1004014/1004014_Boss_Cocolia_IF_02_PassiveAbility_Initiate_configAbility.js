const configAbility = {
  "fileName": "1004014_Boss_Cocolia_IF_02_PassiveAbility_Initiate",
  "skillTrigger": "PassiveSkillExtra01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Ice_Lance_ID",
      "value": {
        "operator": "Variables[0] (Ice_Lance_ID) || Variables[1] (HardLevel) || ADD || RETURN",
        "displayLines": "(Ice_Lance_ID + HardLevel)",
        "constants": [],
        "variables": [
          "Ice_Lance_ID",
          "HardLevel"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Ice_Lance_ID_2",
      "value": {
        "operator": "Variables[0] (Ice_Lance_ID_2) || Variables[1] (HardLevel) || ADD || RETURN",
        "displayLines": "(Ice_Lance_ID_2 + HardLevel)",
        "constants": [],
        "variables": [
          "Ice_Lance_ID_2",
          "HardLevel"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"225344728\">Monster_W1_CocoliaP1_IF_02_Revive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"514394665\">MModifier_Cocolia_IF_Ability04_SummonCount</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2038881084\">Monster_W1_CocoliaP1_IF_02_AccumulatePower</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__514394665\">MModifier_Cocolia_IF_Ability04_SummonCount</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 4
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 4
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}