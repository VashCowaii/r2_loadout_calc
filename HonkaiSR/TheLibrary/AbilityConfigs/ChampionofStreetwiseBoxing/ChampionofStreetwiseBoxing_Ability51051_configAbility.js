const configAbility = {
  "fileName": "ChampionofStreetwiseBoxing_Ability51051",
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
      "modifier": "<a class=\"gModGreen\" id=\"1411304384\">Relic_105_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-686777299\">Relic_105_Sub</a>[<span class=\"descriptionNumberColor\">Champion of Streetwise Boxing</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.05) || Variables[1] (_Layer) || MUL || RETURN",
                "displayLines": "(0.05 * _Layer)",
                "constants": [],
                "variables": [
                  0.05,
                  "_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">#SkillRelic_105_4_P1_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">#SkillRelic_105_4_P2_Maxlayer</span> stack(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Champion of Streetwise Boxing",
      "stackLimit": 6,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1411304384\">Relic_105_Main</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-686777299\">Relic_105_Sub</a>[<span class=\"descriptionNumberColor\">Champion of Streetwise Boxing</span>]",
              "stackLimit": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-686777299\">Relic_105_Sub</a>[<span class=\"descriptionNumberColor\">Champion of Streetwise Boxing</span>]",
              "stackLimit": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
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
  "isRelic": true,
  "desc": [
    "Increases Physical DMG by 10%.",
    "After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s)."
  ],
  "params": [
    [
      0.1
    ],
    [
      0.05,
      5
    ]
  ]
}