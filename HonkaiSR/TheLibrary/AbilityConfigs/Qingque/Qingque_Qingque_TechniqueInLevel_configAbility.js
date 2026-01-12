const configAbility = {
  "fileName": "Qingque_Qingque_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "Event": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_PassiveCount_QingqueSelf",
          "valuePerStack": {
            "AbilityRank_Eidolon2_P1_SPAdd": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        }
      ]
    },
    "Refresh QingQue Bar-State"
  ],
  "references": []
}