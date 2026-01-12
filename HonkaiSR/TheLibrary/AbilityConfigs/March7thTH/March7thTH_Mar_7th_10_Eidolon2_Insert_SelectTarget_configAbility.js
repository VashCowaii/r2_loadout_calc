const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Eidolon2_Insert_SelectTarget",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": "All Hostile Entities (AOE)",
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Target Exists",
            "target": "Use Prior Target(s) Defined",
            "living": true
          },
          {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "M_Mar_7th_10_Eidolon2_Mark_Main"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "inherentTarget": "Use Prior Target(s) Defined",
          "ability": "Mar_7th_10_Eidolon2_Insert_Part01",
          "isTrigger": true
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Target Exists",
            "target": "Use Prior Target(s) Defined",
            "living": true
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": "Caster",
              "inherentTarget": "Use Prior Target(s) Defined",
              "ability": "Mar_7th_10_Eidolon2_Insert_Part01",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "M_Mar_7th_10_InsertCheck"
            }
          ]
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Mar_7th_10_InsertCheck"
    }
  ],
  "references": []
}