const configAbility = {
  "fileName": "4015020_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
  "childAbilityList": [
    "4015020_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
    "4015020_Monster_W4_DawnsEye_01_Rognarok_Camera"
  ],
  "skillTrigger": "BattleEvent",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 5
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1053321581\">Modifier_Monster_W4_DawnsEye_01_WheaterMarkSpecial</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    }
  ],
  "references": []
}