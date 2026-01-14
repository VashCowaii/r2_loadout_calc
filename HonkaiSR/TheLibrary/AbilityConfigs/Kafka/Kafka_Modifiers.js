const configAbility = {
  "fileName": "Kafka_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Kafka_Eidolon4_Sub",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "Is Damage Type/Element",
                    "target": "Owner of this Modifier",
                    "list": [
                      "Lightning"
                    ]
                  },
                  {
                    "name": "Is Joint-Attack",
                    "target": "Owner of this Modifier",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": "Use Prior Target(s) Defined(REAL SOURCE OF)",
                    "target": "Caster",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Kafka_Eidolon4",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "Advanced_Kafka_Eidolon4_Sub"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Kafka_Listen_Rank1",
        "Kafka_Listen_Rank2",
        "Kafka_Listen_Rank6"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Kafka_PassiveDotDamage_Eidolon1[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ],
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "MDF_DotRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DotRatio"
      ],
      "latentQueue": [],
      "description": "DoT taken increases by <span class=\"descriptionNumberColor\">MDF_DotRatio</span>.",
      "type": "Debuff",
      "effectName": "DoT Vulnerability",
      "statusName": "DoT Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Kafka_Friend_Mark_Main",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)(ALL) [Exclude Owner]",
              "maxTargets": 99,
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "Advanced_Kafka_Friend_Mark_Main"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Advanced_Kafka_Friend_Mark_Main"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "Use Prior Target(s) Defined",
                    "target": "Caster's Entire Team [Exclude Owner]",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": "Use [LIST OF] Prior Target(s) Defined",
                    "target": "All Hostile Entities (AOE)(ALL)",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Kafka_Listen_Rank1",
        "Kafka_Listen_Rank6"
      ]
    }
  ],
  "references": []
}