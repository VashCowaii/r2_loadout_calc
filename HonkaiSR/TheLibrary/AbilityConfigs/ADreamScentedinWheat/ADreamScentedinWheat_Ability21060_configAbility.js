const configAbility = {
  "fileName": "ADreamScentedinWheat_Ability21060",
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
      "modifier": "LC_21060_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21060_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate",
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.24"
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
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. The Ultimate DMG and Follow-Up ATK DMG dealt by the wearer increase by #2[i]%.",
  "params": [
    [
      0.12,
      0.24
    ],
    [
      0.14,
      0.28
    ],
    [
      0.16,
      0.32
    ],
    [
      0.18,
      0.36
    ],
    [
      0.2,
      0.4
    ]
  ]
}