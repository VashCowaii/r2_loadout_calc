const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}.[[getSummoner]]"
      },
      "ability": "PlayerBoy_30_Ability03_Part02_Charge",
      "isTrigger": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (Ability03_P1_DamagePercentage) || RETURN",
          "displayLines": "Ability03_P1_DamagePercentage",
          "constants": [],
          "variables": [
            "Ability03_P1_DamagePercentage"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (Ultra_Stance) || RETURN",
          "displayLines": "Ultra_Stance",
          "constants": [],
          "variables": [
            "Ultra_Stance"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Ice"
        },
        "instanceTag": "PlayerBoy_30_Ultra",
        "Tags": null,
        "attackType": "Ultimate"
      },
      "attackType": "Ultimate"
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling"
  ],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_PlayerBoyServant_30_Eidolon6"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoyServant_30_Eidolon6",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  {
                    "name": "Has DMG Instance Tag",
                    "tag": "PlayerBoy_30_Ultra"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}