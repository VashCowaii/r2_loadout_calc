const compositeAbilityObject = {
  "fullCharacterName": "Under the Blue Sky",
  "trimCharacterName": "UndertheBlueSky",
  "abilityList": [
    "UndertheBlueSky_Ability21019"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.16
    },
    "2": {
      "ATK%": 0.2
    },
    "3": {
      "ATK%": 0.24
    },
    "4": {
      "ATK%": 0.28
    },
    "5": {
      "ATK%": 0.32
    }
  },
  "abilityObject": {
    "UndertheBlueSky_Ability21019": {
      "fileName": "UndertheBlueSky_Ability21019",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1177230606\">LC_21019_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1639337319\">LC_21019_Sub</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalChance</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "CRIT Rate Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1177230606\">LC_21019_Main</a>",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1639337319\">LC_21019_Sub</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]%. When the wearer defeats an enemy, the wearer's CRIT Rate increases by #2[i]% for #3[i] turn(s).",
      "params": [
        [
          0.16,
          0.12,
          3
        ],
        [
          0.2,
          0.15,
          3
        ],
        [
          0.24,
          0.18,
          3
        ],
        [
          0.28,
          0.21,
          3
        ],
        [
          0.32,
          0.24,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}