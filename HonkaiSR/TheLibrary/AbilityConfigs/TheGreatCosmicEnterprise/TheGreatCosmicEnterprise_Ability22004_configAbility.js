const configAbility = {
  "fileName": "TheGreatCosmicEnterprise_Ability22004",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_22004_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_22004_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Use Prior Target(s) Defined",
              "target2": "Owner of this Modifier",
              "variable": "_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "_WeakCount",
                "compareType": ">",
                "value2": 7,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WeakCount",
                  "value": 7
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "(0.04 * _WeakCount)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. For every 1 different Weakness Type an enemy target has, increases the DMG dealt to it by the wearer by #2[i]%. Up to a max of 7 Weakness Types can be taken into account for this effect.",
  "params": [
    [
      0.08,
      0.04
    ],
    [
      0.1,
      0.05
    ],
    [
      0.12,
      0.06
    ],
    [
      0.14,
      0.07
    ],
    [
      0.16,
      0.08
    ]
  ]
}